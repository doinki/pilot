import type { Meta, StoryObj } from '@storybook/react';

import RestorePageOutlined from '../../lib/action/RestorePageOutlined';

const meta: Meta<typeof RestorePageOutlined> = {
  component: RestorePageOutlined,
  tags: ['autodocs'],
  title: 'action/RestorePageOutlined',
};

export default meta;
type Story = StoryObj<typeof RestorePageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
