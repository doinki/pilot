import type { Meta, StoryObj } from '@storybook/react';

import AccessTimeFilledOutlined from '../../lib/device/AccessTimeFilledOutlined';

const meta: Meta<typeof AccessTimeFilledOutlined> = {
  component: AccessTimeFilledOutlined,
  tags: ['autodocs'],
  title: 'device/AccessTimeFilledOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessTimeFilledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
