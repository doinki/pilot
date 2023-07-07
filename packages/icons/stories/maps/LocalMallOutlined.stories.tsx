import type { Meta, StoryObj } from '@storybook/react';

import LocalMallOutlined from '../../lib/maps/LocalMallOutlined';

const meta: Meta<typeof LocalMallOutlined> = {
  component: LocalMallOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalMallOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalMallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
