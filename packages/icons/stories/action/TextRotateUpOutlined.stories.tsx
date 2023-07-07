import type { Meta, StoryObj } from '@storybook/react';

import TextRotateUpOutlined from '../../lib/action/TextRotateUpOutlined';

const meta: Meta<typeof TextRotateUpOutlined> = {
  component: TextRotateUpOutlined,
  tags: ['autodocs'],
  title: 'action/TextRotateUpOutlined',
};

export default meta;
type Story = StoryObj<typeof TextRotateUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
