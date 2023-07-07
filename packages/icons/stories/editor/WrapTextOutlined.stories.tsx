import type { Meta, StoryObj } from '@storybook/react';

import WrapTextOutlined from '../../lib/editor/WrapTextOutlined';

const meta: Meta<typeof WrapTextOutlined> = {
  component: WrapTextOutlined,
  tags: ['autodocs'],
  title: 'editor/WrapTextOutlined',
};

export default meta;
type Story = StoryObj<typeof WrapTextOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
