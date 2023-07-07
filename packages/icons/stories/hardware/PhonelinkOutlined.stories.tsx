import type { Meta, StoryObj } from '@storybook/react';

import PhonelinkOutlined from '../../lib/hardware/PhonelinkOutlined';

const meta: Meta<typeof PhonelinkOutlined> = {
  component: PhonelinkOutlined,
  tags: ['autodocs'],
  title: 'hardware/PhonelinkOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonelinkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
