import type { Meta, StoryObj } from '@storybook/react';

import QuestionMarkOutlined from '../../lib/action/QuestionMarkOutlined';

const meta: Meta<typeof QuestionMarkOutlined> = {
  component: QuestionMarkOutlined,
  tags: ['autodocs'],
  title: 'action/QuestionMarkOutlined',
};

export default meta;
type Story = StoryObj<typeof QuestionMarkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
