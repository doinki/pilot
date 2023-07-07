import type { Meta, StoryObj } from '@storybook/react';

import RestartAltOutlined from '../../lib/device/RestartAltOutlined';

const meta: Meta<typeof RestartAltOutlined> = {
  component: RestartAltOutlined,
  tags: ['autodocs'],
  title: 'device/RestartAltOutlined',
};

export default meta;
type Story = StoryObj<typeof RestartAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
