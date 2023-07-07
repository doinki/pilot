import type { Meta, StoryObj } from '@storybook/react';

import FilePresentOutlined from '../../lib/action/FilePresentOutlined';

const meta: Meta<typeof FilePresentOutlined> = {
  component: FilePresentOutlined,
  tags: ['autodocs'],
  title: 'action/FilePresentOutlined',
};

export default meta;
type Story = StoryObj<typeof FilePresentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
