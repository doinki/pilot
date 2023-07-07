import type { Meta, StoryObj } from '@storybook/react';

import CottageOutlined from '../../lib/places/CottageOutlined';

const meta: Meta<typeof CottageOutlined> = {
  component: CottageOutlined,
  tags: ['autodocs'],
  title: 'places/CottageOutlined',
};

export default meta;
type Story = StoryObj<typeof CottageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
