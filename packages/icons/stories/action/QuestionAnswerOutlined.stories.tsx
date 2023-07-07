import type { Meta, StoryObj } from '@storybook/react';

import QuestionAnswerOutlined from '../../lib/action/QuestionAnswerOutlined';

const meta: Meta<typeof QuestionAnswerOutlined> = {
  component: QuestionAnswerOutlined,
  tags: ['autodocs'],
  title: 'action/QuestionAnswerOutlined',
};

export default meta;
type Story = StoryObj<typeof QuestionAnswerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
