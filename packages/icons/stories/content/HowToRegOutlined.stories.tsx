import type { Meta, StoryObj } from '@storybook/react';

import HowToRegOutlined from '../../lib/content/HowToRegOutlined';

const meta: Meta<typeof HowToRegOutlined> = {
  component: HowToRegOutlined,
  tags: ['autodocs'],
  title: 'content/HowToRegOutlined',
};

export default meta;
type Story = StoryObj<typeof HowToRegOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
