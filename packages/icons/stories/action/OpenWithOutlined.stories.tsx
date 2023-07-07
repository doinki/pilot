import type { Meta, StoryObj } from '@storybook/react';

import OpenWithOutlined from '../../lib/action/OpenWithOutlined';

const meta: Meta<typeof OpenWithOutlined> = {
  component: OpenWithOutlined,
  tags: ['autodocs'],
  title: 'action/OpenWithOutlined',
};

export default meta;
type Story = StoryObj<typeof OpenWithOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
