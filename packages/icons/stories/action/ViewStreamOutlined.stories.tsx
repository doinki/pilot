import type { Meta, StoryObj } from '@storybook/react';

import ViewStreamOutlined from '../../lib/action/ViewStreamOutlined';

const meta: Meta<typeof ViewStreamOutlined> = {
  component: ViewStreamOutlined,
  tags: ['autodocs'],
  title: 'action/ViewStreamOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewStreamOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
