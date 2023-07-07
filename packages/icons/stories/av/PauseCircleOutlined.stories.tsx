import type { Meta, StoryObj } from '@storybook/react';

import PauseCircleOutlined from '../../lib/av/PauseCircleOutlined';

const meta: Meta<typeof PauseCircleOutlined> = {
  component: PauseCircleOutlined,
  tags: ['autodocs'],
  title: 'av/PauseCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof PauseCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
