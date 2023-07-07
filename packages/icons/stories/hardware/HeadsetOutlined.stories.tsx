import type { Meta, StoryObj } from '@storybook/react';

import HeadsetOutlined from '../../lib/hardware/HeadsetOutlined';

const meta: Meta<typeof HeadsetOutlined> = {
  component: HeadsetOutlined,
  tags: ['autodocs'],
  title: 'hardware/HeadsetOutlined',
};

export default meta;
type Story = StoryObj<typeof HeadsetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
