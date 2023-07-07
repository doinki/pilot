import type { Meta, StoryObj } from '@storybook/react';

import CloudCircleOutlined from '../../lib/file/CloudCircleOutlined';

const meta: Meta<typeof CloudCircleOutlined> = {
  component: CloudCircleOutlined,
  tags: ['autodocs'],
  title: 'file/CloudCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
