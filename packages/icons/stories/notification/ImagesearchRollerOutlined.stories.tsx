import type { Meta, StoryObj } from '@storybook/react';

import ImagesearchRollerOutlined from '../../lib/notification/ImagesearchRollerOutlined';

const meta: Meta<typeof ImagesearchRollerOutlined> = {
  component: ImagesearchRollerOutlined,
  tags: ['autodocs'],
  title: 'notification/ImagesearchRollerOutlined',
};

export default meta;
type Story = StoryObj<typeof ImagesearchRollerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
