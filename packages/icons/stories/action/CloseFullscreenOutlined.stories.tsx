import type { Meta, StoryObj } from '@storybook/react';

import CloseFullscreenOutlined from '../../lib/action/CloseFullscreenOutlined';

const meta: Meta<typeof CloseFullscreenOutlined> = {
  component: CloseFullscreenOutlined,
  tags: ['autodocs'],
  title: 'action/CloseFullscreenOutlined',
};

export default meta;
type Story = StoryObj<typeof CloseFullscreenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
