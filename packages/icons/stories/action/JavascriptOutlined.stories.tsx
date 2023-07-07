import type { Meta, StoryObj } from '@storybook/react';

import JavascriptOutlined from '../../lib/action/JavascriptOutlined';

const meta: Meta<typeof JavascriptOutlined> = {
  component: JavascriptOutlined,
  tags: ['autodocs'],
  title: 'action/JavascriptOutlined',
};

export default meta;
type Story = StoryObj<typeof JavascriptOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
