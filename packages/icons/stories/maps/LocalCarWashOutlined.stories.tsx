import type { Meta, StoryObj } from '@storybook/react';

import LocalCarWashOutlined from '../../lib/maps/LocalCarWashOutlined';

const meta: Meta<typeof LocalCarWashOutlined> = {
  component: LocalCarWashOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalCarWashOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalCarWashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
