import type { Meta, StoryObj } from '@storybook/react';

import FirstPageOutlined from '../../lib/navigation/FirstPageOutlined';

const meta: Meta<typeof FirstPageOutlined> = {
  component: FirstPageOutlined,
  tags: ['autodocs'],
  title: 'navigation/FirstPageOutlined',
};

export default meta;
type Story = StoryObj<typeof FirstPageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
