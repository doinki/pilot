import type { Meta, StoryObj } from '@storybook/react';

import SixFtApartOutlined from '../../lib/social/SixFtApartOutlined';

const meta: Meta<typeof SixFtApartOutlined> = {
  component: SixFtApartOutlined,
  tags: ['autodocs'],
  title: 'social/SixFtApartOutlined',
};

export default meta;
type Story = StoryObj<typeof SixFtApartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
