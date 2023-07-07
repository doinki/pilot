import type { Meta, StoryObj } from '@storybook/react';

import LocalOfferOutlined from '../../lib/maps/LocalOfferOutlined';

const meta: Meta<typeof LocalOfferOutlined> = {
  component: LocalOfferOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalOfferOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalOfferOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
