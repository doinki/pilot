import type { Meta, StoryObj } from '@storybook/react';

import CribOutlined from '../../lib/places/CribOutlined';

const meta: Meta<typeof CribOutlined> = {
  component: CribOutlined,
  tags: ['autodocs'],
  title: 'places/CribOutlined',
};

export default meta;
type Story = StoryObj<typeof CribOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
