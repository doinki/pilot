import type { Meta, StoryObj } from '@storybook/react';

import ModeNightOutlined from '../../lib/device/ModeNightOutlined';

const meta: Meta<typeof ModeNightOutlined> = {
  component: ModeNightOutlined,
  tags: ['autodocs'],
  title: 'device/ModeNightOutlined',
};

export default meta;
type Story = StoryObj<typeof ModeNightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
