import type { Meta, StoryObj } from '@storybook/react';

import CloudOutlined from '../../lib/file/CloudOutlined';

const meta: Meta<typeof CloudOutlined> = {
  component: CloudOutlined,
  tags: ['autodocs'],
  title: 'file/CloudOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
