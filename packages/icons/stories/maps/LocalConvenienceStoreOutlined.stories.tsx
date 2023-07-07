import type { Meta, StoryObj } from '@storybook/react';

import LocalConvenienceStoreOutlined from '../../lib/maps/LocalConvenienceStoreOutlined';

const meta: Meta<typeof LocalConvenienceStoreOutlined> = {
  component: LocalConvenienceStoreOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalConvenienceStoreOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalConvenienceStoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
