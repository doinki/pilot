import type { Meta, StoryObj } from '@storybook/react';

import PauseCircleOutlineOutlined from '../../lib/av/PauseCircleOutlineOutlined';

const meta: Meta<typeof PauseCircleOutlineOutlined> = {
  component: PauseCircleOutlineOutlined,
  tags: ['autodocs'],
  title: 'av/PauseCircleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof PauseCircleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
