import type { Meta, StoryObj } from '@storybook/react';

import FullscreenOutlined from '../../lib/navigation/FullscreenOutlined';

const meta: Meta<typeof FullscreenOutlined> = {
  component: FullscreenOutlined,
  tags: ['autodocs'],
  title: 'navigation/FullscreenOutlined',
};

export default meta;
type Story = StoryObj<typeof FullscreenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
