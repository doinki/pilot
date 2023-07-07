import type { Meta, StoryObj } from '@storybook/react';

import EdgesensorLowOutlined from '../../lib/device/EdgesensorLowOutlined';

const meta: Meta<typeof EdgesensorLowOutlined> = {
  component: EdgesensorLowOutlined,
  tags: ['autodocs'],
  title: 'device/EdgesensorLowOutlined',
};

export default meta;
type Story = StoryObj<typeof EdgesensorLowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
