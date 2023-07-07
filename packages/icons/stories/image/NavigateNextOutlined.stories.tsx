import type { Meta, StoryObj } from '@storybook/react';

import NavigateNextOutlined from '../../lib/image/NavigateNextOutlined';

const meta: Meta<typeof NavigateNextOutlined> = {
  component: NavigateNextOutlined,
  tags: ['autodocs'],
  title: 'image/NavigateNextOutlined',
};

export default meta;
type Story = StoryObj<typeof NavigateNextOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
