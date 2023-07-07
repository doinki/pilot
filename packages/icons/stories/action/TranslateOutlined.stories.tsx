import type { Meta, StoryObj } from '@storybook/react';

import TranslateOutlined from '../../lib/action/TranslateOutlined';

const meta: Meta<typeof TranslateOutlined> = {
  component: TranslateOutlined,
  tags: ['autodocs'],
  title: 'action/TranslateOutlined',
};

export default meta;
type Story = StoryObj<typeof TranslateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
