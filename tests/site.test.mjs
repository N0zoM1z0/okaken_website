import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  html: await readFile(new URL("../index.html", import.meta.url), "utf8"),
  css: await readFile(new URL("../styles.css", import.meta.url), "utf8"),
  js: await readFile(new URL("../script.js", import.meta.url), "utf8"),
  notice: await readFile(new URL("../NOTICE.md", import.meta.url), "utf8"),
  ignore: await readFile(new URL("../.gitignore", import.meta.url), "utf8")
};

test("the document exposes its core landmarks", () => {
  for (const fragment of [
    "<header",
    "<nav",
    "<main",
    "<aside",
    "<footer",
    "id=\"search-form\"",
    "id=\"submission-dialog\""
  ]) {
    assert.ok(files.html.includes(fragment), `missing ${fragment}`);
  }
});

test("all local document assets resolve to tracked paths", async () => {
  const references = [...files.html.matchAll(/(?:href|src)="(?!https?:|#|mailto:)([^"?]+)(?:\?[^\"]*)?"/g)]
    .map((match) => match[1])
    .filter((path) => !path.startsWith("data:"));

  for (const path of references) {
    await assert.doesNotReject(
      readFile(new URL(`../${path}`, import.meta.url)),
      `missing local asset: ${path}`
    );
  }
});

test("the implementation retains the observed visual vocabulary", () => {
  for (const token of [
    "--field-red",
    "--signal-red",
    "--link-cyan",
    ".site-grid",
    ".article-card",
    ".counter"
  ]) {
    assert.ok(files.css.includes(token), `missing CSS token ${token}`);
  }

  for (const label of [
    "ホーム",
    "都市伝説",
    "怪談",
    "心霊スポット",
    "UFO",
    "UMA",
    "体験談",
    "ニュース",
    "掲示板"
  ]) {
    assert.ok(files.html.includes(label), `missing navigation label ${label}`);
  }
});

test("interactive controls have matching JavaScript behavior", () => {
  for (const behavior of [
    "renderPosts",
    "applyHashRoute",
    "localStorage",
    "submit-report-form",
    "archive-select",
    "search-form"
  ]) {
    assert.ok(files.js.includes(behavior), `missing behavior ${behavior}`);
  }
});

test("private research chat is ignored and reference rights are separated", () => {
  assert.match(files.ignore, /^chat_with_gpt\/$/m);
  assert.match(files.notice, /©VisualArt's\/Key\/Rewrite Project/);
  assert.match(files.notice, /explicitly excluded from the MIT License/);
});
