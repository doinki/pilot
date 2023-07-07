import type { Meta, StoryObj } from '@storybook/react';

import NotAccessibleOutlined from '../../lib/action/NotAccessibleOutlined';

const meta: Meta<typeof NotAccessibleOutlined> = {
  component: NotAccessibleOutlined,
  tags: ['autodocs'],
  title: 'action/NotAccessibleOutlined',
};

export default meta;
type Story = StoryObj<typeof NotAccessibleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
