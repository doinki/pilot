import type { Meta, StoryObj } from '@storybook/react';

import CompareOutlined from '../../lib/image/CompareOutlined';

const meta: Meta<typeof CompareOutlined> = {
  component: CompareOutlined,
  tags: ['autodocs'],
  title: 'image/CompareOutlined',
};

export default meta;
type Story = StoryObj<typeof CompareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
