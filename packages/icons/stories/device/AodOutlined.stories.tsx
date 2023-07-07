import type { Meta, StoryObj } from '@storybook/react';

import AodOutlined from '../../lib/device/AodOutlined';

const meta: Meta<typeof AodOutlined> = {
  component: AodOutlined,
  tags: ['autodocs'],
  title: 'device/AodOutlined',
};

export default meta;
type Story = StoryObj<typeof AodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
