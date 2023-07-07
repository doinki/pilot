import type { Meta, StoryObj } from '@storybook/react';

import PhonelinkOffOutlined from '../../lib/hardware/PhonelinkOffOutlined';

const meta: Meta<typeof PhonelinkOffOutlined> = {
  component: PhonelinkOffOutlined,
  tags: ['autodocs'],
  title: 'hardware/PhonelinkOffOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonelinkOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
