import type { Meta, StoryObj } from '@storybook/react';

import AppsOutlined from '../../lib/navigation/AppsOutlined';

const meta: Meta<typeof AppsOutlined> = {
  component: AppsOutlined,
  tags: ['autodocs'],
  title: 'navigation/AppsOutlined',
};

export default meta;
type Story = StoryObj<typeof AppsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
