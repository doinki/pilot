import type { Meta, StoryObj } from '@storybook/react';

import MosqueOutlined from '../../lib/maps/MosqueOutlined';

const meta: Meta<typeof MosqueOutlined> = {
  component: MosqueOutlined,
  tags: ['autodocs'],
  title: 'maps/MosqueOutlined',
};

export default meta;
type Story = StoryObj<typeof MosqueOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
