import type { Meta, StoryObj } from '@storybook/react';

import PauseCircleFilledOutlined from '../../lib/av/PauseCircleFilledOutlined';

const meta: Meta<typeof PauseCircleFilledOutlined> = {
  component: PauseCircleFilledOutlined,
  tags: ['autodocs'],
  title: 'av/PauseCircleFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof PauseCircleFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
