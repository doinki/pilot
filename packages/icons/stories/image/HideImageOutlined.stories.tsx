import type { Meta, StoryObj } from '@storybook/react';

import HideImageOutlined from '../../lib/image/HideImageOutlined';

const meta: Meta<typeof HideImageOutlined> = {
  component: HideImageOutlined,
  tags: ['autodocs'],
  title: 'image/HideImageOutlined',
};

export default meta;
type Story = StoryObj<typeof HideImageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
