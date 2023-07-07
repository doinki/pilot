import type { Meta, StoryObj } from '@storybook/react';

import FastfoodOutlined from '../../lib/maps/FastfoodOutlined';

const meta: Meta<typeof FastfoodOutlined> = {
  component: FastfoodOutlined,
  tags: ['autodocs'],
  title: 'maps/FastfoodOutlined',
};

export default meta;
type Story = StoryObj<typeof FastfoodOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
