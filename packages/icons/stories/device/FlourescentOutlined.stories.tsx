import type { Meta, StoryObj } from '@storybook/react';

import FlourescentOutlined from '../../lib/device/FlourescentOutlined';

const meta: Meta<typeof FlourescentOutlined> = {
  component: FlourescentOutlined,
  tags: ['autodocs'],
  title: 'device/FlourescentOutlined',
};

export default meta;
type Story = StoryObj<typeof FlourescentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
