import type { Meta, StoryObj } from '@storybook/react';

import BrokenImageOutlined from '../../lib/image/BrokenImageOutlined';

const meta: Meta<typeof BrokenImageOutlined> = {
  component: BrokenImageOutlined,
  tags: ['autodocs'],
  title: 'image/BrokenImageOutlined',
};

export default meta;
type Story = StoryObj<typeof BrokenImageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
