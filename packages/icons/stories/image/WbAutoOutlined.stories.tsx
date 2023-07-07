import type { Meta, StoryObj } from '@storybook/react';

import WbAutoOutlined from '../../lib/image/WbAutoOutlined';

const meta: Meta<typeof WbAutoOutlined> = {
  component: WbAutoOutlined,
  tags: ['autodocs'],
  title: 'image/WbAutoOutlined',
};

export default meta;
type Story = StoryObj<typeof WbAutoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
