import type { Meta, StoryObj } from '@storybook/react';

import StyleOutlined from '../../lib/image/StyleOutlined';

const meta: Meta<typeof StyleOutlined> = {
  component: StyleOutlined,
  tags: ['autodocs'],
  title: 'image/StyleOutlined',
};

export default meta;
type Story = StoryObj<typeof StyleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
