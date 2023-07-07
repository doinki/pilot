import type { Meta, StoryObj } from '@storybook/react';

import CloudOffOutlined from '../../lib/file/CloudOffOutlined';

const meta: Meta<typeof CloudOffOutlined> = {
  component: CloudOffOutlined,
  tags: ['autodocs'],
  title: 'file/CloudOffOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
