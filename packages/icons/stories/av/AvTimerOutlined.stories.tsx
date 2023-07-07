import type { Meta, StoryObj } from '@storybook/react';

import AvTimerOutlined from '../../lib/av/AvTimerOutlined';

const meta: Meta<typeof AvTimerOutlined> = {
  component: AvTimerOutlined,
  tags: ['autodocs'],
  title: 'av/AvTimerOutlined',
};

export default meta;
type Story = StoryObj<typeof AvTimerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
