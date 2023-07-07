import type { Meta, StoryObj } from '@storybook/react';

import CloudDoneOutlined from '../../lib/file/CloudDoneOutlined';

const meta: Meta<typeof CloudDoneOutlined> = {
  component: CloudDoneOutlined,
  tags: ['autodocs'],
  title: 'file/CloudDoneOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudDoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
