import type { Meta, StoryObj } from '@storybook/react';

import LocalLaundryServiceOutlined from '../../lib/maps/LocalLaundryServiceOutlined';

const meta: Meta<typeof LocalLaundryServiceOutlined> = {
  component: LocalLaundryServiceOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalLaundryServiceOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalLaundryServiceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
