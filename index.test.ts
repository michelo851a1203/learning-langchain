import { describe, expect, test } from "vitest";
import { initializeChat, learnHowToUseChatTemplate, combinePromptWithTemplate } from '.';

describe('main', () => {
  // test('initialize open ai chat', async () => {
  //   await initializeChat();
  // });
  // test('main test with prompt chat', async () => {
  //   const result = await learnHowToUseChatTemplate('python');
  //   expect(result).toBe('How to build a merge sort algorithm with python?');
  // });

  test('test lang chain with template', async () => {
    await combinePromptWithTemplate()
  });
})
